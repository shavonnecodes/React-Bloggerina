import axios from 'axios';

export class BlogEntryRepository {
    url = 'http://localhost:8080/entries';
    config = {
        headers: {}
    };

    getAllBlogEntries() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject();
                });
        })
    }

    getBlogEntryById(entryId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${entryId}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject();
                });
        })
    }

    updateBlogEntry(entryId, blogEntry) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/${entryId}`, blogEntry, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject();
                });
        })
    }

    addBlogEntry(entryId, blogEntry) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/${entryId}`, blogEntry, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject();
                });
        })
    }

    deleteBlogEntry(entryId) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/delete/${entryId}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject();
                });
        })
    }

}
