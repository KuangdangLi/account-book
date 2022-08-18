import IdGenerator from '@/lib/IdGenerator';

const localStorageKeyName = "tagList";
interface Tag{
  id: string
  name: string
}
interface tagListModel {
  data: Tag[]
  fetch: ()=>Tag[]
  create: (name:string)=>void
  update:(id:string,name:string)=> boolean
  remove:(id:string)=> boolean
  save: ()=> void
}
const tagListModel ={
  data:[] as Tag[],
  fetch(){
    this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]");
    return this.data
  },
  create(name:string){
    const names = this.data.map(item=>item.name);
    if(name === ''||name === ' ') throw new Error('the label cannot be empty')
    if(names.indexOf(name)>=0) throw new Error('the label already exists')
    const id = IdGenerator().toString();
    this.data.push({id:id,name:name})
    this.save()
  },
  update(id:string,name:string) {
    const IdList = this.data.map(item=>item.id)
    const index = IdList.indexOf(id)
    if(index>=0){
      const NameList = this.data.map(item=>item.name)
      if(NameList.indexOf(name)>=0){
        throw new Error('标签名重复')
      }else{
        const tag = this.data.filter(item=>item.id===id)[0]
        tag.name = name;
        this.save()
        return true
      }
    }
  },
  remove(id:string){
    const IdList = this.data.map(item=>item.id)
    const index = IdList.indexOf(id)
    this.data.splice(index,1)
    this.save()
    return true
  },
  save(){
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
}

export default  tagListModel;