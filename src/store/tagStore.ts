import IdGenerator from '@/lib/IdGenerator';

const localStorageKeyName = "tagList";

const tagStore = {
  tagList:[] as Tag[],
  fetchTags(){
    this.tagList=JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]");
    return this.tagList
  },
  createTag(name:string){
    const names = this.tagList.map(item=>item.name);
    if(name === ''||name === ' ') throw new Error('the label cannot be empty')
    if(names.indexOf(name)>=0) throw new Error('the label already exists')
    const id = IdGenerator().toString();
    this.tagList.push({id:id,name:name})
    this.saveTags()
  },
  findTag(id:string){
    return this.tagList.filter(item=>item.id===id)[0]
  },
  updateTag(id:string,name:string) {
    const IdList = this.tagList.map(item=>item.id)
    const index = IdList.indexOf(id)
    if(index>=0){
      const NameList = this.tagList.map(item=>item.name)
      if(NameList.indexOf(name)>=0){
        throw new Error('标签名重复')
      }else{
        const tag = this.findTag(id)
        tag.name = name;
        this.saveTags()
        return true
      }
    }
  },
  removeTag(id:string){
    const IdList = this.tagList.map(item=>item.id)
    const index = IdList.indexOf(id)
    this.tagList.splice(index,1)
    this.saveTags()
    return true
  },
  saveTags(){
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
  }
}
tagStore.fetchTags()
export default tagStore