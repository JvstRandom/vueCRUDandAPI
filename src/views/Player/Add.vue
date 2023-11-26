<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Add Player</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Nama</label>
                    <input type="text" v-model="model.player.Nama" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="">Team</label>
                    <input type="text" v-model="model.player.Team" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="">Kategori</label>
                    <input type="text" v-model="model.player.Kategori" class="form-control">
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" @click="savePlayer">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'playerAdd',
    data(){
        return {
            errorList: null,
            model: {
                player: {
                    Nama: '',
                    Team: '',
                    Kategori: ''
                }
            }
        }
    },
    methods: {
        savePlayer(){

            var $this = this;
            axios.post('http://localhost:8080/addPlayer', this.model.player)
            .then(res => {

                console.log(res.data)
                alert(res.data.message)
                
                this.model.player = {
                    Nama: '',
                    Team: '',
                    Kategori: ''
                }
            })
            .catch(function (error){
                if (error.response) {

                    if (error.response.status == 400){
                        $this.errorList = "error";
                    }

                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
        }
    }
}
</script>