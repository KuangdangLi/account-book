type RecordItem = {
    tags: string[]
    notes: string
    types: string
    amount: number
    createdAt: Date | undefined
}
type Tag ={
    id: string
    name: string
}
type tagListModel = {
    data: Tag[]
    fetch: ()=>Tag[]
    create: (name:string)=>void
    update:(id:string,name:string)=> boolean
    remove:(id:string)=> boolean
    save: ()=> void
}