import request from '@/utils/request'


//1.获取一级分类
// /admin/product/getCategory1    get
export const reqCategory1List = ()=> {
    return request({
        url:'/admin/product/getCategory1',
        method:'get'
    })
}

//2.获取二级分类
// /admin/product/getCategory2/{category1Id}    get
export const reqCategory2List = (category1Id) => {
    return request({
        url:`/admin/product/getCategory2/${category1Id}`,
        method:'get'
    })
}

//3.获取三级分类
// /admin/product/getCategory3/{category2Id}    get
export const reqCategory3List = (category2Id) => {
    return request({
        url:`/admin/product/getCategory3/${category2Id}`,
        method:'get'
    })
}

//4.获取平台属性
// /admin/product/attrInfoList/{category1Id}/{category2Id}/{category3Id}    get
export const reqAttrList = (category1Id,category2Id,category3Id) => {
    return request({
        url:`/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`,
        methods:'get'
    })
}

//5.添加属性与属性值接口
// /admin/product/saveAttrInfo    post
/*
   "attrName":"",                属性名
   "attrValueList":[             属性名中的属性值
     {
        "attrId":0,              属性的id
        "valueName":"string"   
     }
   ],
   "categoryId":0,                携带category3Id
   "categoryLevel":3,             

*/
export const reqAddAttr = (data) => {
    return request({
        url:'/admin/product/saveAttrInfo',
        method:'post',
        data
    })
}