export interface YugiCardprops{
    id:number
    name:string
    desc:string
    atk:number
    def:number
    level:number
    attribute:string
    banlist_info?:{}
    card_images:[{image_url?:string,image_url_small?:string,image_url_cropped?:string}]
    race:string
    archetype:string
    type:string
  }