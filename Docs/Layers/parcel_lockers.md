[//]: # (WARNING: this file is automatically generated. Please find the sources at the bottom and edit those sources)

 parcel_lockers 
================





Layer showing parcel lockers for collecting and sending parcels.






  - This layer is shown at zoomlevel **12** and higher




#### Themes using this layer 





  - [personal](https://mapcomplete.org/personal)
  - [postboxes](https://mapcomplete.org/postboxes)




 Basic tags for this layer 
---------------------------



Elements must match **any** of the following expressions:

 - <a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparcel_locker' target='_blank'>parcel_locker</a>
 - <a href='https://wiki.openstreetmap.org/wiki/Key:vending' target='_blank'>vending</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:vending%3Dparcel_pickup;parcel_mail_in' target='_blank'>parcel_pickup;parcel_mail_in</a> & <a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dvending_machine' target='_blank'>vending_machine</a>

[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B%28%20%20%20%20nwr%5B%22amenity%22%3D%22parcel_locker%22%5D%28%7B%7Bbbox%7D%7D%29%3B%0A%20%20%20%20nwr%5B%22vending%22%3D%22parcel_pickup%3Bparcel_mail_in%22%5D%5B%22amenity%22%3D%22vending_machine%22%5D%28%7B%7Bbbox%7D%7D%29%3B%0A%29%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/id#values) [id](https://wiki.openstreetmap.org/wiki/Key:id) | Multiple choice | 
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/brand#values) [brand](https://wiki.openstreetmap.org/wiki/Key:brand) | [string](../SpecialInputElements.md#string) | [Amazon Locker](https://wiki.openstreetmap.org/wiki/Tag:brand%3DAmazon Locker) [DHL Packstation](https://wiki.openstreetmap.org/wiki/Tag:brand%3DDHL Packstation) [Pickup Station](https://wiki.openstreetmap.org/wiki/Tag:brand%3DPickup Station) [PostNL](https://wiki.openstreetmap.org/wiki/Tag:brand%3DPostNL)
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/operator#values) [operator](https://wiki.openstreetmap.org/wiki/Key:operator) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/opening_hours#values) [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) | [opening_hours](../SpecialInputElements.md#opening_hours) | [24/7](https://wiki.openstreetmap.org/wiki/Tag:opening_hours%3D24/7)
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/ref#values) [ref](https://wiki.openstreetmap.org/wiki/Key:ref) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/parcel_mail_in#values) [parcel_mail_in](https://wiki.openstreetmap.org/wiki/Key:parcel_mail_in) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:parcel_mail_in%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:parcel_mail_in%3Dno)
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/parcel_pickup#values) [parcel_pickup](https://wiki.openstreetmap.org/wiki/Key:parcel_pickup) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:parcel_pickup%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:parcel_pickup%3Dno)




### just_created 



This element shows a 'thank you' that the contributor has recently created this element

This tagrendering has no question and is thus read-only





  - *You just created this element! Thanks for sharing this info with the world and helping people worldwide.*  corresponds with  id~.+


This tagrendering is only visible in the popup if the following condition is met: `_last_edit:passed_time<300 & (_version_number= | <a href='https://wiki.openstreetmap.org/wiki/Key:_version_number' target='_blank'>_version_number</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:_version_number%3D1' target='_blank'>1</a>) & _backend~.+`

This tagrendering has labels  `added_by_default`



### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata` and shows the button to upload new images

This tagrendering has no question and is thus read-only





### brand 



The question is  *What is the brand of the parcel locker?*

This rendering asks information about the property  [brand](https://wiki.openstreetmap.org/wiki/Key:brand) 

This is rendered with  `This is a {brand} parcel locker`





  - *This is an Amazon Locker*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:brand' target='_blank'>brand</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:brand%3DAmazon Locker' target='_blank'>Amazon Locker</a>
  - *This is a DHL Packstation*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:brand' target='_blank'>brand</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:brand%3DDHL Packstation' target='_blank'>DHL Packstation</a>
  - *This is a DPD Pickup Station*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:brand' target='_blank'>brand</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:brand%3DPickup Station' target='_blank'>Pickup Station</a>
  - *This is a PostNL Parcel Locker*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:brand' target='_blank'>brand</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:brand%3DPostNL' target='_blank'>PostNL</a>




### operator 



The question is  *What is the operator of the parcel locker?*

This rendering asks information about the property  [operator](https://wiki.openstreetmap.org/wiki/Key:operator) 

This is rendered with  `This parcel locker is operated by {operator}`





### opening_hours_24_7 



The question is  *What are the opening hours of {title()}?*

This rendering asks information about the property  [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) 

This is rendered with  `<h3>Opening hours</h3>{opening_hours_table(opening_hours)}`





  - *24/7 opened (including holidays)*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:opening_hours' target='_blank'>opening_hours</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:opening_hours%3D24/7' target='_blank'>24/7</a>




### ref 



The question is  *What is the reference number/identifier of this parcel locker?*

This rendering asks information about the property  [ref](https://wiki.openstreetmap.org/wiki/Key:ref) 

This is rendered with  `This parcel locker has the reference {ref}`





### mail-in 



The question is  *Can you send packages from this parcel locker?*





  - *You can send packages from this parcel locker*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:parcel_mail_in' target='_blank'>parcel_mail_in</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:parcel_mail_in%3Dyes' target='_blank'>yes</a>
  - *You <b>can't</b> send packages from this parcel locker*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:parcel_mail_in' target='_blank'>parcel_mail_in</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:parcel_mail_in%3Dno' target='_blank'>no</a>


This tagrendering is only visible in the popup if the following condition is met: `<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparcel_locker' target='_blank'>parcel_locker</a>`



### pickup 



The question is  *Can you pick up packages from this parcel locker?*





  - *You can pick up packages from this parcel locker*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:parcel_pickup' target='_blank'>parcel_pickup</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:parcel_pickup%3Dyes' target='_blank'>yes</a>
  - *You <b>can't</b> pick up packages from this parcel locker*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:parcel_pickup' target='_blank'>parcel_pickup</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:parcel_pickup%3Dno' target='_blank'>no</a>


This tagrendering is only visible in the popup if the following condition is met: `<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparcel_locker' target='_blank'>parcel_locker</a>`



### leftover-questions 



This tagrendering has no question and is thus read-only





### minimap 



Shows a small map with the feature. Added by default to every popup

This tagrendering has no question and is thus read-only





### move-button 



This tagrendering has no question and is thus read-only





### delete-button 



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





#### Filters 





id | question | osmTags
---- | ---------- | ---------
open_now.0 | Open now | _isOpen=yes
 

This document is autogenerated from [assets/layers/parcel_lockers/parcel_lockers.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/parcel_lockers/parcel_lockers.json)
