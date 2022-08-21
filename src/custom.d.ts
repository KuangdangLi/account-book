type Tag ={
    id: string
    name: string
}
type RecordItem = {
    tags: Tag[]
    notes: string
    types: string
    amount: number
    createdAt: string | undefined
}
type tagListModel = {
    data: Tag[]
    fetch: ()=>Tag[]
    create: (name:string)=>void
    update:(id:string,name:string)=> boolean
    remove:(id:string)=> boolean
    save: ()=> void
}
type RootState ={
    tagList:Tag[]
    currentTag?: Tag
    recordList: RecordItem[]
}
