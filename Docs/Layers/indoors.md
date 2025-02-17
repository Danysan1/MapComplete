[//]: # (WARNING: this file is automatically generated. Please find the sources at the bottom and edit those sources)

 indoors 
=========





Basic indoor mapping: shows room outlines






  - This layer is shown at zoomlevel **13** and higher
  - This layer is needed as dependency for layer [entrance](#entrance)




#### Themes using this layer 





  - [indoors](https://mapcomplete.org/indoors)
  - [onwheels](https://mapcomplete.org/onwheels)
  - [personal](https://mapcomplete.org/personal)




 Basic tags for this layer 
---------------------------



Elements must match **any** of the following expressions:

 - <a href='https://wiki.openstreetmap.org/wiki/Key:indoor' target='_blank'>indoor</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:indoor%3Droom' target='_blank'>room</a>
 - <a href='https://wiki.openstreetmap.org/wiki/Key:indoor' target='_blank'>indoor</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:indoor%3Darea' target='_blank'>area</a>
 - <a href='https://wiki.openstreetmap.org/wiki/Key:indoor' target='_blank'>indoor</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:indoor%3Dwall' target='_blank'>wall</a>
 - <a href='https://wiki.openstreetmap.org/wiki/Key:indoor' target='_blank'>indoor</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:indoor%3Ddoor' target='_blank'>door</a>
 - <a href='https://wiki.openstreetmap.org/wiki/Key:indoor' target='_blank'>indoor</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:indoor%3Dlevel' target='_blank'>level</a>

[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B%28%20%20%20%20nwr%5B%22indoor%22%3D%22room%22%5D%28%7B%7Bbbox%7D%7D%29%3B%0A%20%20%20%20nwr%5B%22indoor%22%3D%22area%22%5D%28%7B%7Bbbox%7D%7D%29%3B%0A%20%20%20%20nwr%5B%22indoor%22%3D%22wall%22%5D%28%7B%7Bbbox%7D%7D%29%3B%0A%20%20%20%20nwr%5B%22indoor%22%3D%22door%22%5D%28%7B%7Bbbox%7D%7D%29%3B%0A%20%20%20%20nwr%5B%22indoor%22%3D%22level%22%5D%28%7B%7Bbbox%7D%7D%29%3B%0A%29%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/id#values) [id](https://wiki.openstreetmap.org/wiki/Key:id) | Multiple choice | 
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/level#values) [level](https://wiki.openstreetmap.org/wiki/Key:level) | [float](../SpecialInputElements.md#float) | [0](https://wiki.openstreetmap.org/wiki/Tag:level%3D0) [1](https://wiki.openstreetmap.org/wiki/Tag:level%3D1) [-1](https://wiki.openstreetmap.org/wiki/Tag:level%3D-1)
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/ref#values) [ref](https://wiki.openstreetmap.org/wiki/Key:ref) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/name#values) [name](https://wiki.openstreetmap.org/wiki/Key:name) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/room#values) [room](https://wiki.openstreetmap.org/wiki/Key:room) | Multiple choice | [administration](https://wiki.openstreetmap.org/wiki/Tag:room%3Dadministration) [auditorium](https://wiki.openstreetmap.org/wiki/Tag:room%3Dauditorium) [bedroom](https://wiki.openstreetmap.org/wiki/Tag:room%3Dbedroom) [chapel](https://wiki.openstreetmap.org/wiki/Tag:room%3Dchapel) [class](https://wiki.openstreetmap.org/wiki/Tag:room%3Dclass) [computer](https://wiki.openstreetmap.org/wiki/Tag:room%3Dcomputer) [conference](https://wiki.openstreetmap.org/wiki/Tag:room%3Dconference) [crypt](https://wiki.openstreetmap.org/wiki/Tag:room%3Dcrypt) [kitchen](https://wiki.openstreetmap.org/wiki/Tag:room%3Dkitchen) [laboratory](https://wiki.openstreetmap.org/wiki/Tag:room%3Dlaboratory) [library](https://wiki.openstreetmap.org/wiki/Tag:room%3Dlibrary) [locker](https://wiki.openstreetmap.org/wiki/Tag:room%3Dlocker) [nursery](https://wiki.openstreetmap.org/wiki/Tag:room%3Dnursery) [office](https://wiki.openstreetmap.org/wiki/Tag:room%3Doffice) [prison_cell](https://wiki.openstreetmap.org/wiki/Tag:room%3Dprison_cell) [restaurant](https://wiki.openstreetmap.org/wiki/Tag:room%3Drestaurant) [security_check](https://wiki.openstreetmap.org/wiki/Tag:room%3Dsecurity_check) [sport](https://wiki.openstreetmap.org/wiki/Tag:room%3Dsport) [storage](https://wiki.openstreetmap.org/wiki/Tag:room%3Dstorage) [technical](https://wiki.openstreetmap.org/wiki/Tag:room%3Dtechnical) [toilets](https://wiki.openstreetmap.org/wiki/Tag:room%3Dtoilets) [waiting](https://wiki.openstreetmap.org/wiki/Tag:room%3Dwaiting)
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/capacity#values) [capacity](https://wiki.openstreetmap.org/wiki/Key:capacity) | [pnat](../SpecialInputElements.md#pnat) | 
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/name:etymology:wikidata#values) [name:etymology:wikidata](https://wiki.openstreetmap.org/wiki/Key:name:etymology:wikidata) | [wikidata](../SpecialInputElements.md#wikidata) | 
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/access#values) [access](https://wiki.openstreetmap.org/wiki/Key:access) | [string](../SpecialInputElements.md#string) | [yes](https://wiki.openstreetmap.org/wiki/Tag:access%3Dyes) [customers](https://wiki.openstreetmap.org/wiki/Tag:access%3Dcustomers) [no](https://wiki.openstreetmap.org/wiki/Tag:access%3Dno) [key](https://wiki.openstreetmap.org/wiki/Tag:access%3Dkey)
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/fee#values) [fee](https://wiki.openstreetmap.org/wiki/Key:fee) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:fee%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:fee%3Dno)
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/charge#values) [charge](https://wiki.openstreetmap.org/wiki/Key:charge) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/opening_hours#values) [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) | [opening_hours](../SpecialInputElements.md#opening_hours) | [24/7](https://wiki.openstreetmap.org/wiki/Tag:opening_hours%3D24/7)
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/wheelchair#values) [wheelchair](https://wiki.openstreetmap.org/wiki/Key:wheelchair) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dno) [designated](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Ddesignated)
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/door:width#values) [door:width](https://wiki.openstreetmap.org/wiki/Key:door:width) | [pfloat](../SpecialInputElements.md#pfloat) | 
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/toilets:position#values) [toilets:position](https://wiki.openstreetmap.org/wiki/Key:toilets:position) | Multiple choice | [seated](https://wiki.openstreetmap.org/wiki/Tag:toilets:position%3Dseated) [urinal](https://wiki.openstreetmap.org/wiki/Tag:toilets:position%3Durinal) [squat](https://wiki.openstreetmap.org/wiki/Tag:toilets:position%3Dsquat) [seated;urinal](https://wiki.openstreetmap.org/wiki/Tag:toilets:position%3Dseated;urinal)
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/changing_table#values) [changing_table](https://wiki.openstreetmap.org/wiki/Key:changing_table) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:changing_table%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:changing_table%3Dno)
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/changing_table:location#values) [changing_table:location](https://wiki.openstreetmap.org/wiki/Key:changing_table:location) | [string](../SpecialInputElements.md#string) | [female_toilet](https://wiki.openstreetmap.org/wiki/Tag:changing_table:location%3Dfemale_toilet) [male_toilet](https://wiki.openstreetmap.org/wiki/Tag:changing_table:location%3Dmale_toilet) [wheelchair_toilet](https://wiki.openstreetmap.org/wiki/Tag:changing_table:location%3Dwheelchair_toilet) [dedicated_room](https://wiki.openstreetmap.org/wiki/Tag:changing_table:location%3Ddedicated_room)
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/toilets:handwashing#values) [toilets:handwashing](https://wiki.openstreetmap.org/wiki/Key:toilets:handwashing) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:toilets:handwashing%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:toilets:handwashing%3Dno)
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/toilets:paper_supplied#values) [toilets:paper_supplied](https://wiki.openstreetmap.org/wiki/Key:toilets:paper_supplied) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:toilets:paper_supplied%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:toilets:paper_supplied%3Dno)




### just_created 



This element shows a 'thank you' that the contributor has recently created this element

This tagrendering has no question and is thus read-only





  - *You just created this element! Thanks for sharing this info with the world and helping people worldwide.*  corresponds with  id~.+


This tagrendering is only visible in the popup if the following condition is met: `_last_edit:passed_time<300 & (_version_number= | <a href='https://wiki.openstreetmap.org/wiki/Key:_version_number' target='_blank'>_version_number</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:_version_number%3D1' target='_blank'>1</a>) & _backend~.+`

This tagrendering has labels  `added_by_default`



### sotm-events 



This tagrendering has no question and is thus read-only





### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata` and shows the button to upload new images

This tagrendering has no question and is thus read-only





### repeated 



This tagrendering has no question and is thus read-only



This tagrendering is only visible in the popup if the following condition is met: `repeat_on~.+`

This tagrendering has labels  `level`



### single_level 



The question is  *On what level is this feature located?*

This rendering asks information about the property  [level](https://wiki.openstreetmap.org/wiki/Key:level) 

This is rendered with  `Located on the {level}th floor`





  - *Located underground*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:location' target='_blank'>location</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:location%3Dunderground' target='_blank'>underground</a>
  - _This option cannot be chosen as answer_
  - *Located on the ground floor*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:level' target='_blank'>level</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:level%3D0' target='_blank'>0</a>
  - *Located on the ground floor*  corresponds with  level=
  - _This option cannot be chosen as answer_
  - *Located on the first floor*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:level' target='_blank'>level</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:level%3D1' target='_blank'>1</a>
  - *Located on the first basement level*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:level' target='_blank'>level</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:level%3D-1' target='_blank'>-1</a>


This tagrendering has labels  `level`



### ref 



The question is  *What is the reference number of this room?*

This rendering asks information about the property  [ref](https://wiki.openstreetmap.org/wiki/Key:ref) 

This is rendered with  `This room has the reference number {ref}`



This tagrendering is only visible in the popup if the following condition is met: `<a href='https://wiki.openstreetmap.org/wiki/Key:indoor' target='_blank'>indoor</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:indoor%3Droom' target='_blank'>room</a> | <a href='https://wiki.openstreetmap.org/wiki/Key:indoor' target='_blank'>indoor</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:indoor%3Darea' target='_blank'>area</a> | <a href='https://wiki.openstreetmap.org/wiki/Key:indoor' target='_blank'>indoor</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:indoor%3Dcorridor' target='_blank'>corridor</a>`



### name 



The question is  *What is the name of this room?*

This rendering asks information about the property  [name](https://wiki.openstreetmap.org/wiki/Key:name) 

This is rendered with  `This room is named {name}`



This tagrendering is only visible in the popup if the following condition is met: `<a href='https://wiki.openstreetmap.org/wiki/Key:indoor' target='_blank'>indoor</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:indoor%3Droom' target='_blank'>room</a> | <a href='https://wiki.openstreetmap.org/wiki/Key:indoor' target='_blank'>indoor</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:indoor%3Darea' target='_blank'>area</a> | <a href='https://wiki.openstreetmap.org/wiki/Key:indoor' target='_blank'>indoor</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:indoor%3Dcorridor' target='_blank'>corridor</a>`



### room-type 



The question is  *What type of room is this?*





  - *This is a administrative room*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dadministration' target='_blank'>administration</a>
  - *This is a auditorium*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dauditorium' target='_blank'>auditorium</a>
  - *This is a bedroom*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dbedroom' target='_blank'>bedroom</a>
  - *This is a chapel*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dchapel' target='_blank'>chapel</a>
  - *This is a classroom*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dclass' target='_blank'>class</a>
  - *This is a classroom*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dclassroom' target='_blank'>classroom</a>
  - _This option cannot be chosen as answer_
  - *This is a computer room*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dcomputer' target='_blank'>computer</a>
  - *This is a conference room*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dconference' target='_blank'>conference</a>
  - *This is a crypt*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dcrypt' target='_blank'>crypt</a>
  - *This is a kitchen*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dkitchen' target='_blank'>kitchen</a>
  - *This is a laboratory*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dlaboratory' target='_blank'>laboratory</a>
  - *This is a library*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dlibrary' target='_blank'>library</a>
  - *This is a locker room*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dlocker' target='_blank'>locker</a>
  - *This is a nursery*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dnursery' target='_blank'>nursery</a>
  - *This is an office*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Doffice' target='_blank'>office</a>
  - *This is a prison_cell*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dprison_cell' target='_blank'>prison_cell</a>
  - *This is a restaurant*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Drestaurant' target='_blank'>restaurant</a>
  - *This is a room to perform security checks*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dsecurity_check' target='_blank'>security_check</a>
  - *This is a sport room*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dsport' target='_blank'>sport</a>
  - *This is a storage room*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dstorage' target='_blank'>storage</a>
  - *This is a technical room*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dtechnical' target='_blank'>technical</a>
  - *These are toilets*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dtoilets' target='_blank'>toilets</a>
  - *This is a waiting room*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dwaiting' target='_blank'>waiting</a>




### room-capacity 



The question is  *How much people can at most fit in this room?*

This rendering asks information about the property  [capacity](https://wiki.openstreetmap.org/wiki/Key:capacity) 

This is rendered with  `At most {capacity} people fit this room`



This tagrendering is only visible in the popup if the following condition is met: `<a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dwaiting' target='_blank'>waiting</a> | <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Drestaurant' target='_blank'>restaurant</a> | <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Doffice' target='_blank'>office</a> | <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dnursery' target='_blank'>nursery</a> | <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dconference' target='_blank'>conference</a> | <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dauditorium' target='_blank'>auditorium</a> | <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dchapel' target='_blank'>chapel</a> | <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dbedroom' target='_blank'>bedroom</a> | <a href='https://wiki.openstreetmap.org/wiki/Key:room' target='_blank'>room</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:room%3Dclassroom' target='_blank'>classroom</a>`



### wikipedia-etymology 



The question is  *What is the Wikidata-item that this object is named after?*

This rendering asks information about the property  [name:etymology:wikidata](https://wiki.openstreetmap.org/wiki/Key:name:etymology:wikidata) 

This is rendered with  `<h3>Wikipedia article of the name giver</h3>{wikipedia(name:etymology:wikidata):max-height:20rem}`





### toilet-access 



The question is  *Are these toilets publicly accessible?*

This rendering asks information about the property  [access](https://wiki.openstreetmap.org/wiki/Key:access) 

This is rendered with  `Access is {access}`





  - *Public access*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:access' target='_blank'>access</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:access%3Dyes' target='_blank'>yes</a>
  - *Only access to customers*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:access' target='_blank'>access</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:access%3Dcustomers' target='_blank'>customers</a>
  - *Not accessible*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:access' target='_blank'>access</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:access%3Dno' target='_blank'>no</a>
  - *Accessible, but one has to ask a key to enter*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:access' target='_blank'>access</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:access%3Dkey' target='_blank'>key</a>
  - *Public access*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:access' target='_blank'>access</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:access%3Dpublic' target='_blank'>public</a>
  - _This option cannot be chosen as answer_


This tagrendering is only visible in the popup if the following condition is met: `<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dtoilets' target='_blank'>toilets</a>`

This tagrendering has labels  `relevant-questions`



### toilets-fee 



The question is  *Are these toilets free to use?*





  - *These are paid toilets*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:fee' target='_blank'>fee</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:fee%3Dyes' target='_blank'>yes</a>
  - *Free to use*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:fee' target='_blank'>fee</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:fee%3Dno' target='_blank'>no</a>


This tagrendering is only visible in the popup if the following condition is met: `<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dtoilets' target='_blank'>toilets</a> & access!=no`

This tagrendering has labels  `relevant-questions`



### toilet-charge 



The question is  *How much does one have to pay for these toilets?*

This rendering asks information about the property  [charge](https://wiki.openstreetmap.org/wiki/Key:charge) 

This is rendered with  `The fee is {charge}`



This tagrendering is only visible in the popup if the following condition is met: `<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dtoilets' target='_blank'>toilets</a> & <a href='https://wiki.openstreetmap.org/wiki/Key:fee' target='_blank'>fee</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:fee%3Dyes' target='_blank'>yes</a>`

This tagrendering has labels  `relevant-questions`



### payment-options-split 



The question is  *Which methods of payment are accepted here?*





  - *Cash is accepted here*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:cash' target='_blank'>payment:cash</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:cash%3Dyes' target='_blank'>yes</a>
  - _This option cannot be chosen as answer_
  - Unselecting this answer will add payment:cash=
  - *Payment cards are accepted here*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:cards' target='_blank'>payment:cards</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:cards%3Dyes' target='_blank'>yes</a>
  - _This option cannot be chosen as answer_
  - Unselecting this answer will add payment:cards=
  - *Payment by QR-code is possible here*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:qr_code' target='_blank'>payment:qr_code</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:qr_code%3Dyes' target='_blank'>yes</a>
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:qr_code' target='_blank'>payment:qr_code</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:qr_code%3Dno' target='_blank'>no</a>
  - *Coins are accepted here*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins' target='_blank'>payment:coins</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins%3Dyes' target='_blank'>yes</a>
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins' target='_blank'>payment:coins</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins%3Dno' target='_blank'>no</a>
  - *Bank notes are accepted here*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:notes' target='_blank'>payment:notes</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:notes%3Dyes' target='_blank'>yes</a>
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:notes' target='_blank'>payment:notes</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:notes%3Dno' target='_blank'>no</a>
  - *Debit cards are accepted here*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:debit_cards' target='_blank'>payment:debit_cards</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:debit_cards%3Dyes' target='_blank'>yes</a>
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:debit_cards' target='_blank'>payment:debit_cards</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:debit_cards%3Dno' target='_blank'>no</a>
  - *Credit cards are accepted here*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:credit_cards' target='_blank'>payment:credit_cards</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:credit_cards%3Dyes' target='_blank'>yes</a>
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:credit_cards' target='_blank'>payment:credit_cards</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:credit_cards%3Dno' target='_blank'>no</a>


This tagrendering is only visible in the popup if the following condition is met: `<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dtoilets' target='_blank'>toilets</a> & <a href='https://wiki.openstreetmap.org/wiki/Key:fee' target='_blank'>fee</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:fee%3Dyes' target='_blank'>yes</a>`

This tagrendering has labels  `relevant-questions`



### opening_hours_24_7 



The question is  *When are these toilets opened?*

This rendering asks information about the property  [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) 

This is rendered with  `<h3>Opening hours</h3>{opening_hours_table(opening_hours)}`





  - *24/7 opened (including holidays)*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:opening_hours' target='_blank'>opening_hours</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:opening_hours%3D24/7' target='_blank'>24/7</a>


This tagrendering is only visible in the popup if the following condition is met: `<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dtoilets' target='_blank'>toilets</a> & access!=no`

This tagrendering has labels  `relevant-questions`



### toilets-wheelchair 



The question is  *Is there a dedicated toilet for wheelchair users?*





  - *There is a dedicated toilet for wheelchair users*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:wheelchair' target='_blank'>wheelchair</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dyes' target='_blank'>yes</a>
  - *No wheelchair access*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:wheelchair' target='_blank'>wheelchair</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dno' target='_blank'>no</a>
  - *There is only a dedicated toilet for wheelchair users*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:wheelchair' target='_blank'>wheelchair</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Ddesignated' target='_blank'>designated</a>


This tagrendering is only visible in the popup if the following condition is met: `<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dtoilets' target='_blank'>toilets</a>`

This tagrendering has labels  `relevant-questions`



### wheelchair-door-width 



The question is  *What is the width of the door to the wheelchair accessible toilet?*

This rendering asks information about the property  [door:width](https://wiki.openstreetmap.org/wiki/Key:door:width) 

This is rendered with  `The door to the wheelchair-accessible toilet is {canonical(door:width)} wide`



This tagrendering is only visible in the popup if the following condition is met: `<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dtoilets' target='_blank'>toilets</a> & (<a href='https://wiki.openstreetmap.org/wiki/Key:wheelchair' target='_blank'>wheelchair</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dyes' target='_blank'>yes</a> | <a href='https://wiki.openstreetmap.org/wiki/Key:wheelchair' target='_blank'>wheelchair</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Ddesignated' target='_blank'>designated</a>)`

This tagrendering has labels  `relevant-questions`



### toilets-type 



The question is  *Which kind of toilets are these?*





  - *There are only seated toilets*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:toilets:position' target='_blank'>toilets:position</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:toilets:position%3Dseated' target='_blank'>seated</a>
  - *There are only urinals here*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:toilets:position' target='_blank'>toilets:position</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:toilets:position%3Durinal' target='_blank'>urinal</a>
  - *There are only squat toilets here*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:toilets:position' target='_blank'>toilets:position</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:toilets:position%3Dsquat' target='_blank'>squat</a>
  - *Both seated toilets and urinals are available here*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:toilets:position' target='_blank'>toilets:position</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:toilets:position%3Dseated;urinal' target='_blank'>seated;urinal</a>


This tagrendering is only visible in the popup if the following condition is met: `<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dtoilets' target='_blank'>toilets</a>`

This tagrendering has labels  `relevant-questions`



### toilets-changing-table 



The question is  *Is a changing table (to change diapers) available?*





  - *A changing table is available*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:changing_table' target='_blank'>changing_table</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:changing_table%3Dyes' target='_blank'>yes</a>
  - *No changing table is available*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:changing_table' target='_blank'>changing_table</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:changing_table%3Dno' target='_blank'>no</a>


This tagrendering is only visible in the popup if the following condition is met: `<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dtoilets' target='_blank'>toilets</a>`

This tagrendering has labels  `relevant-questions`



### toilet-changing_table:location 



The question is  *Where is the changing table located?*

This rendering asks information about the property  [changing_table:location](https://wiki.openstreetmap.org/wiki/Key:changing_table:location) 

This is rendered with  `The changing table is located at {changing_table:location}`





  - *The changing table is in the toilet for women. *  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:changing_table:location' target='_blank'>changing_table:location</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:changing_table:location%3Dfemale_toilet' target='_blank'>female_toilet</a>
  - *The changing table is in the toilet for men. *  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:changing_table:location' target='_blank'>changing_table:location</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:changing_table:location%3Dmale_toilet' target='_blank'>male_toilet</a>
  - *The changing table is in the toilet for wheelchair users. *  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:changing_table:location' target='_blank'>changing_table:location</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:changing_table:location%3Dwheelchair_toilet' target='_blank'>wheelchair_toilet</a>
  - *The changing table is in a dedicated room. *  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:changing_table:location' target='_blank'>changing_table:location</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:changing_table:location%3Ddedicated_room' target='_blank'>dedicated_room</a>


This tagrendering is only visible in the popup if the following condition is met: `<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dtoilets' target='_blank'>toilets</a> & <a href='https://wiki.openstreetmap.org/wiki/Key:changing_table' target='_blank'>changing_table</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:changing_table%3Dyes' target='_blank'>yes</a>`

This tagrendering has labels  `relevant-questions`



### toilet-handwashing 



The question is  *Do these toilets have a sink to wash your hands?*





  - *These toilets have a sink to wash your hands*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:toilets:handwashing' target='_blank'>toilets:handwashing</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:toilets:handwashing%3Dyes' target='_blank'>yes</a>
  - *These toilets <b>don't</b> have a sink to wash your hands*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:toilets:handwashing' target='_blank'>toilets:handwashing</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:toilets:handwashing%3Dno' target='_blank'>no</a>


This tagrendering is only visible in the popup if the following condition is met: `<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dtoilets' target='_blank'>toilets</a>`

This tagrendering has labels  `relevant-questions`



### toilet-has-paper 



The question is  *Does one have to bring their own toilet paper to this toilet?*





  - *This toilet is equipped with toilet paper*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:toilets:paper_supplied' target='_blank'>toilets:paper_supplied</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:toilets:paper_supplied%3Dyes' target='_blank'>yes</a>
  - *You have to bring your own toilet paper to this toilet*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:toilets:paper_supplied' target='_blank'>toilets:paper_supplied</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:toilets:paper_supplied%3Dno' target='_blank'>no</a>


This tagrendering is only visible in the popup if the following condition is met: `<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dtoilets' target='_blank'>toilets</a> & toilets:position!=urinal`

This tagrendering has labels  `relevant-questions`



### leftover-questions 



This tagrendering has no question and is thus read-only





### minimap 



Shows a small map with the feature. Added by default to every popup

This tagrendering has no question and is thus read-only





### last_edit 



Gives some metainfo about the last edit and who did edit it - rendering only

This tagrendering has no question and is thus read-only



This tagrendering is only visible in the popup if the following condition is met: `_last_edit:changeset~.+ & _last_edit:contributor~.+`

This tagrendering has labels  `added_by_default`



### favourite_status 



This tagrendering has no question and is thus read-only





### qr_code 



This tagrendering has no question and is thus read-only



This tagrendering has labels  `added_by_default`



### share 



This tagrendering has no question and is thus read-only



This tagrendering has labels  `added_by_default`



### all-tags 



This tagrendering has no question and is thus read-only

 

This document is autogenerated from [assets/layers/indoors/indoors.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/indoors/indoors.json)
