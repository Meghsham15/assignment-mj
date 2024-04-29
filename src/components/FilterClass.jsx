import MoviesList from "./MoivesList";

class FilterMovie {
    constructor() {
        this.MoviesList = MoviesList;
        this.genre = undefined;
        this.language = undefined;
        this.country = undefined;
        this.textSearch = undefined;
        this.filteredList = undefined;
    }

    setTypeVal(type, val) {
        if (type === "genre") {
            this.genre = val;
        } else if (type === "language") {
            // console.log(type + " - " + val);
            this.language = val;
        } else if (type === "country") {
            // console.log(type + " - " + val);
            this.country = val;
        } else {
            // console.log(type + " - " + val);
            this.textSearch = val;
        }
    }

    filter(type, value) {
        if (!value) {
            this.filteredList = undefined;
            // console.log("yeah empty");
        }
        this.setTypeVal(type, value);
        if (this.country) {
            if (this.filteredList) {
                this.filteredList = this.filteredList.filter((ele) => {
                    if (ele.moviecountries.includes(this.country)) {
                        return ele;
                    }
                });
            } else {
                this.filteredList = this.MoviesList.filter((ele) => {
                    if (ele.moviecountries.includes(this.country)) {
                        return ele;
                    }
                });
            }
        }
        if (this.genre) {
            if (this.filteredList) {
                this.filteredList = this.filteredList.filter((ele) => {
                    if (ele.moviegenres.includes(this.genre)) {
                        return ele;
                    }
                });
            } else {
                this.filteredList = this.MoviesList.filter((ele) => {
                    if (ele.moviegenres.includes(this.genre)) {
                        return ele;
                    }
                });
                // console.log("yeah genre- " + this.genre);
            }
        }
        if (this.language) {
            if (this.filteredList) {
                this.filteredList = this.filteredList.filter((ele) => {
                    if (ele.movielanguages.includes(this.language)) {
                        return ele;
                    }
                });
            } else {
                this.filteredList = this.MoviesList.filter((ele) => {
                    if (ele.movielanguages.includes(this.language)) {
                        return ele;
                    }
                });
            }
        }
        if (this.textSearch) {
            if (this.filteredList) {
                this.filteredList = this.filteredList.filter((ele) => {
                    if (ele.movietitle.toLowerCase().includes(this.textSearch.toLowerCase())) {
                        return ele;
                    }
                });
            } else {
                this.filteredList = this.MoviesList.filter((ele) => {
                    if (ele.movietitle.toLowerCase().includes(this.textSearch.toLowerCase())) {
                        return ele;
                    }
                });
            }
        }
        if (!this.filteredList) {
            return this.MoviesList;
        }else{
            // console.log("filtered");
            console.log(this.filteredList);
            return this.filteredList;
        }

    }

}

let FilterClass = new FilterMovie();

export default FilterClass;