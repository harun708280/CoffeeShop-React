import { toast } from "react-toastify"

const getFavoriteName=()=>{

    const favorite=localStorage.getItem('favorite')
    if (favorite) {
        return JSON.parse(favorite)
    }
    return []
}

const addFavoriteName=(name)=>{
    const favoriteName=getFavoriteName()
    if (!favoriteName.includes(name)) {
        favoriteName.push(name)
        saveFavorite(favoriteName)
        toast.success('Success this Item Add Favorite')
        
    }
    else{
        toast.error('sorry this allReady add')

    }
}

const saveFavorite=(favorite)=>{
    const favoriteAdd=JSON.stringify(favorite)
    localStorage.setItem('favorite',favoriteAdd)
}

const removeFavorite=(name)=>{
    const getData=getFavoriteName()
    const dataFilter=getData.filter(data=>data!==name)
    
    
    saveFavorite(dataFilter)
    toast.success('successfully delate this item')
}

export {addFavoriteName,getFavoriteName,removeFavorite}