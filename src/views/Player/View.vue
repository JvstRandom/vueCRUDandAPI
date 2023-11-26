<template>
    <br>
    <div class="container">
        <div class="card-header">
            <h4>
                Players
                <RouterLink to="/player/create" class="btn btn-primary float-end">
                    Add Player
                </RouterLink>
            </h4>
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>Player ID</th>
                        <th>Nama</th>
                        <th>Team</th>
                        <th>Kategori</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(player, index) in this.players" :key="index">
                        <td>{{ player.Player_id }}</td>
                        <td>{{ player.Nama }}</td>
                        <td>{{ player.Team }}</td>
                        <td>{{ player.Kategori }}</td>
                        <td>
                            <RouterLink to="/" class="btn btn-success">
                                Edit
                            </RouterLink> 
                            <button type="button" class="btn btn-danger">
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'players',
    data() {
        return {
            players: []
        }
    },
    mounted(){
        this.getPlayers();
        // console.log('mounted')
    },
    methods: {
        getPlayers() {
            axios.get('http://localhost:8000/players/').then(res => {
                this.players = res.data
                // console.log(this.players)
            });
        }
    }

}
</script>
  