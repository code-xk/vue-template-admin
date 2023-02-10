//获取品牌管理的接口
import request from '@/utils/request'

//1.获取品牌列表的接口
// /admin/product/baseTrademark/{page}/{limit}   ----- 当前页码、每一页展示多少条数据
export const reqTradeMarkList = (page,limit) => {
    return request({
        url:`/admin/product/baseTrademark/${page}/${limit}`,
        method:'get'
    })
}

//2.添加品牌
// /admin/product/baseTrademark/save        post  携带两个参数：品牌名称、品牌LOGO
//3.修改品牌
// /admin/product/baseTrademark/update      put   携带三个参数：id、品牌名称、品牌LOGO

export const reqAddorUpdateTrademark = (trademark) => {
    if(trademark.id){
        return request({
            url:"/admin/product/baseTrademark/update",
            method:'put',
            data:trademark
        })
    }else{
        return request({
            url:"/admin/product/baseTrademark/save",
            method:'post',
            data:trademark
        })
    }
}

//4.删除品牌
// /admin/product/baseTrademark/remove/{id}    delete

export const reqDeleteTradeMark = (id)=>request({url:`/admin/product/baseTrademark/remove/${id}`,method:'delete'})