import axios from 'axios';

export class BlogEntryRepository {
    url = 'http://localhost:8080/';
    config = {
        headers: {}
    };

    getAllBlogEntries() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/entries`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject();
                });
        })
    }

    getBlogEntryById(entryId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/entries/${entryId}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject();
                });
        })
    }

    updateBlogEntry(entryId, blogEntry) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/entries/${entryId}`, blogEntry, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject();
                });
        })
    }

    addBlogEntry(entryId, blogEntry) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/entries`, blogEntry, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject();
                });
        })
    }

    deleteBlogEntry(entryId) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/delete/${entryId}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject();
                });
        })
    }

}
