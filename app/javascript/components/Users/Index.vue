<template>
  <div id="users" v-if="users.length > 0" style="position:absolute;top:20%;">
    <h3> Current Users ({{ users.length }}) </h3>
    <table style="border-collapse: collapse; width:200%">
      <tr style="text-align: left; padding: 8px;">
        <th class="text-xs-right">ID</th>
        <th class="text-xs-right">Email</th>
        <th class="text-xs-right">Created Date</th>
        <th class="text-xs-right">Admin</th>
      </tr>
      <tr v-for="user in users" >
        <td class="text-xs-right"> {{ user.id }} </td>
        <td class="text-xs-right"> {{ user.email}} </td>
        <td class="text-xs-right"> {{ user.created_at }} </td>
        <td class="text-xs-right"> {{ user.admin }} </td>
        <td class="text-xs-right"> 
            <v-tooltip top>
              <v-btn color="error" slot="activator" flat @click="removeUser(user)"><v-icon>delete</v-icon></v-btn>
              <span>Delete User</span>
            </v-tooltip>
        </td>
      </tr>
    </table>
  </div>
</template>



<!--     <v-data-table
      v-bind:headers="mainHeaders"
      :items="users"
      hide-actions
      class="elevation-1"
    >
    <template slot="items" slot-scope="props">
      <td class="text-xs-right">{{ props.item.id}}</td>
      <td class="text-xs-right">{{ props.item.email }}</td>
      <td class="text-xs-right">{{ props.item.created_at }}</td>
      <td class="text-xs-right">
        <v-tooltip top>
            <v-btn color="error" slot="activator" flat @click="removeUser(user)"><v-icon>delete</v-icon></v-btn>
            <span>Delete User</span>
        </v-tooltip>
      </td>
    </template>
    </v-data-table> -->



<!-- ORIGINAL -->

<!--     <ul class="list-group">
      <li class="list-group-item" v-for="user in users">
        {{ user }}
        <button @click="removeUser(user)">&times; User</button>
        <button @click="addFriend(user)">&plus; Friend</button>
      </li>
    </ul> 
  </div>
</template> -->

<script>
import userRequests from './userRequests'
import friendsREST from 'components/Friends/friendsREST'

export default {

  data: function() {
    return {
      mainHeaders: [
        {text: 'ID', value: 'id'},
        {text: 'Email', value: 'email'},
        {text: 'Created', value:'created_at'}
      ]
    }
  },
  computed: {
    users: function() {
      return this.$store.getters.users
    }
  },
  methods: {
    removeUser: function(user) {
      userRequests.removeUser(this, user)
    },
    addFriend: function(user) {
      friendsREST.addFriend(this, user)
    }
  },
  created: function() {
    userRequests.getUsers(this)
  }
}
</script>

<style>

</style>