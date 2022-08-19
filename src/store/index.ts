import Vue from 'vue'
import Vuex from 'vuex'
import IdGenerator from '@/lib/IdGenerator';
import clone from '@/lib/clone';

Vue.use(Vuex)
type RootState ={
  tagList:Tag[]
  currentTag?: Tag
  recordList: RecordItem[]
}

const store = new Vuex.Store({
  state: {
    tagList: [] as Tag[],
    currentTag: undefined,
    recordList: []
  }as RootState,
  mutations: {
    fetchTags(state){
      state.tagList=JSON.parse(window.localStorage.getItem('tagList') || "[]");
    },
    createTag(state,name:string){
      const names = state.tagList.map(item=>item.name);
      if(name === ''||name === ' ') throw new Error('the label cannot be empty')
      if(names.indexOf(name)>=0) throw new Error('the label already exists')
      const id = IdGenerator().toString();
      state.tagList.push({id:id,name:name})
      store.commit('saveTags')
    },
    setCurrentTag(state,id:string){
       state.currentTag=state.tagList.filter(item=>item.id===id)[0]
    },
    updateTag(state, {id, name}) {
      const IdList = state.tagList.map(item=>item.id)
      const index = IdList.indexOf(id)
      if(index>=0){
        const NameList = state.tagList.map(item=>item.name)
        if(NameList.indexOf(name)>=0){
          throw new Error('标签名重复')
        }else{
           store.commit('setCurrentTag',id)
          state.currentTag!.name = name;
          store.commit('saveTags')
        }
      }
    },
    removeTag(state,id:string){
      const IdList = state.tagList.map((item:Tag)=>item.id)
      const index = IdList.indexOf(id)
      state.tagList.splice(index,1)
      store.commit('saveTags')
    },
    saveTags(state){
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    fetchRecord(state){
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || "[]");
    },
    saveRecord(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    createRecord(state,record:RecordItem){
      const record2 =clone(record)
      record2.createdAt = new Date()
      state.recordList.push(record2)
      store.commit('saveRecord')
    }
  }
})

export  default  store