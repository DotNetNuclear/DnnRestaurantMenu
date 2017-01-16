import util from "utils";

const Localization = {
    get(key) {
        let moduleName = "RestaurantMenu";
        return util.getResx(moduleName, key);
    }
};
export default Localization;