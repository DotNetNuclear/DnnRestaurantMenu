import util from "../utils";

//function serializeQueryStringParameters(obj) {
//    let s = [];
//    for (let p in obj) {
//        if (obj.hasOwnProperty(p)) {
//            s.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
//        }
//    }
//    return s.join("&");
//}

class MenuService {
    getServiceFramework(controller) {
        let sf = util.sf;

        sf.moduleRoot = "DotNetNuclear.RestaurantMenu.PersonaBar";
        sf.controller = controller;

        return sf;
    }

    getMenuItems(searchParameters, callback, errorCallback) {
        const sf = this.getServiceFramework("Menu");
        searchParameters = Object.assign({}, searchParameters, {});
        sf.get("list", searchParameters, callback, errorCallback);
    }

    saveMenuItem(menuItemVm, callback, errorCallback) {
        const sf = this.getServiceFramework("Menu");
        sf.post("upsert", menuItemVm, callback, errorCallback);
    }

    deleteMenuItem(menuItemVm, callback, errorCallback) {
        const sf = this.getServiceFramework("Menu");
        sf.post("delete", menuItemVm, callback, errorCallback);
    }


    //getGetScheduleItem(searchParameters, callback) {
    //    const sf = this.getServiceFramework("TaskScheduler");
    //    searchParameters = Object.assign({}, searchParameters, {
    //        //logType: "*"
    //    });
    //    sf.get("GetScheduleItem?" + serializeQueryStringParameters(searchParameters), {}, callback);
    //}

    //deleteScheduleItem(payload, callback) {
    //    const sf = this.getServiceFramework("TaskScheduler");        
    //    sf.post("DeleteSchedule", payload, callback);
    //}

    //createScheduleItem(payload, callback, failureCallback) {
    //    const sf = this.getServiceFramework("TaskScheduler");        
    //    sf.post("CreateScheduleItem", payload, callback, failureCallback);
    //}

    //updateScheduleItem(payload, callback, failureCallback) {
    //    const sf = this.getServiceFramework("TaskScheduler");        
    //    sf.post("UpdateScheduleItem", payload, callback, failureCallback);
    //}

}
const menuService = new MenuService();
export default menuService;