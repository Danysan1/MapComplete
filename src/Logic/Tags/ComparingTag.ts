import { TagsFilter } from "./TagsFilter"
import { TagConfigJson } from "../../Models/ThemeConfig/Json/TagConfigJson"
import { Tag } from "./Tag"

export default class ComparingTag implements TagsFilter {
    private readonly _key: string
    private readonly _predicate: (value: string) => boolean
    private readonly _representation: "<" | ">" | "<=" | ">="
    private readonly _boundary: string

    constructor(
        key: string,
        predicate: (value: string | undefined) => boolean,
        representation: "<" | ">" | "<=" | ">=",
        boundary: string
    ) {
        this._key = key
        this._predicate = predicate
        this._representation = representation
        this._boundary = boundary
    }

    asChange(_: Record<string, string>): { k: string; v: string }[] {
        throw "A comparable tag can not be used to be uploaded to OSM"
    }

    asHumanString() {
        return this._key + this._representation + this._boundary
    }

    asOverpass(): string[] {
        throw "A comparable tag can not be used as overpass filter"
    }

    /**
     * const tg = new ComparingTag("key", value => (Number(value) < 42), "<", "42")
     * const tg0 = new ComparingTag("key", value => (Number(value) < 42), "<", "42")
     * const tg1 = new ComparingTag("key", value => (Number(value) <= 42), "<=", "42")
     * const against = new ComparingTag("key", value => (Number(value) > 0), ">", "0")
     * tg.shadows(new Tag("key", "41")) // => true
     * tg.shadows(new Tag("key", "0")) // => true
     * tg.shadows(new Tag("key", "43")) // => false
     * tg.shadows(new Tag("key", "0")) // => true
     * tg.shadows(tg) // => true
     * tg.shadows(tg0) // => true
     * tg.shadows(against) // => false
     * tg1.shadows(tg0) // => true
     * tg0.shadows(tg1) // => false
     *
     */
    shadows(other: TagsFilter): boolean {
        if (other === this) {
            return true
        }
        if (other instanceof ComparingTag) {
            if (other._key !== this._key) {
                return false
            }
            const selfDesc = this._representation === "<" || this._representation === "<="
            const otherDesc = other._representation === "<" || other._representation === "<="
            if (selfDesc !== otherDesc) {
                return false
            }
            if (
                this._boundary === other._boundary &&
                this._representation === other._representation
            ) {
                return true
            }
            if (this._predicate(other._boundary)) {
                return true
            }
            return false
        }

        if (other instanceof Tag) {
            if (other.key !== this._key) {
                return false
            }
            if (this.matchesProperties({ [other.key]: other.value })) {
                return true
            }
        }

        return false
    }

    isUsableAsAnswer(): boolean {
        return false
    }

    /**
     * Checks if the properties match
     *
     * const t = new ComparingTag("key", (x => Number(x) < 42), "<", "42")
     * t.matchesProperties({key: 42}) // => false
     * t.matchesProperties({key: 41}) // => true
     * t.matchesProperties({key: 0}) // => true
     * t.matchesProperties({differentKey: 42}) // => false
     */
    matchesProperties(properties: Record<string, string>): boolean {
        return this._predicate(properties[this._key])
    }

    usedKeys(): string[] {
        return [this._key]
    }

    usedTags(): { key: string; value: string }[] {
        return []
    }

    asJson(): TagConfigJson {
        return this._key + this._representation
    }

    optimize(): TagsFilter | boolean {
        return this
    }

    isNegative(): boolean {
        return true
    }

    visit(f: (TagsFilter) => void) {
        f(this)
    }
}
