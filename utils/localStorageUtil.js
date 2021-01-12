//It is Local Storage for chosen position
class LocalStorageUtil {
    constructor() {
        //Position  is the our key that can accept value// example position:["1","2"]
        this.keyName = "Position";
    }
    //here we get position from local storage
    //nuance: this option for 1/1 (uniq) element if we have more need rewrite!!!!!!!!!!!!!!
    getPosition(){
        const positionLocalStorage = localStorage.getItem(this.keyName);
        if(positionLocalStorage!==null){
            return JSON.parse(positionLocalStorage);

        }
        return [];
    }
    //here we put new position in the local storage
    putPosition(id){
        let positions = this.getPosition();
        let pushPosition = false;
        //here delete if we have 2 positions in local storage// second click should mean delete from chosen list
        const index = positions.indexOf(id);
        if(index === -1){
            positions.push(id);
            pushPosition = true;
        }
        else {
            positions.splice(index, 1)
        }


        localStorage.setItem(this.keyName, JSON.stringify(positions));
        return {pushPosition, positions}
    }
}
const  localStorageUtil = new LocalStorageUtil();

