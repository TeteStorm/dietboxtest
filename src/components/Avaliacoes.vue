<script>
import Firebase from 'firebase'

let config = {
   apiKey: "AIzaSyAjt4aukZVsX-jOzU3MvFYa__SHJd4nAzM",
    authDomain: "dietbox-test.firebaseapp.com",
    databaseURL: "https://dietbox-test.firebaseio.com",
    projectId: "dietbox-test",
    storageBucket: "dietbox-test.appspot.com",
    messagingSenderId: "313079932795"
}

let avaliacoes =  Firebase.initializeApp(config);
let db = avaliacoes.database();
let avaliacoesRef = db.ref('avaliacoes');

console.log(avaliacoesRef);
export default {
  name: 'avaliacoes',
  firebase: {
    avaliacoes : avaliacoesRef
  },
  data () {
    return {
      novaAvaliacao: {
          nome: '',
          idade: '',
          peso: ''
      }
    }
  },
  methods: {
      adicionarAvaliacao: function () {
        avaliacoesRef.push(this.novaAvaliacao);
        this.novaAvaliacao.nome = '';
        this.novaAvaliacao.idade = '';
        this.novaAvaliacao.peso = '';
        toastr.success('Avaliação incluída com successo')
      },
     removerAvaliacao: function (avaliacao) {
          avaliacoesRef.child(avaliacao['.key']).remove()
          toastr.success('Avaliação removida com successo')
      },
      limparDados: function () {
          this.novaAvaliacao.nome = '';
          this.novaAvaliacao.idade = '';
          this.novaAvaliacao.peso = '';
      },   
    },
}
</script>
<template>
  <div id="avaliacoes" class="container" > 
    <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Realizar nova Avaliação</h3>
        </div>
        <div class="panel-body">
          <form id="form" class="form-inline" v-on:submit.prevent="adicionarAvaliacao">
            <div class="form-group">
              <label for="avaliacaoNome">Nome:</label>
              <input type="text" id="avaliacaoNome" class="form-control" v-model="novaAvaliacao.nome">
            </div>
            <div class="form-group">
              <label for="avaliacaoAltura">Altura:</label>
              <input type="text" id="avaliacaoAltura" class="form-control" v-model="novaAvaliacao.altura">
            </div>
            <div class="form-group">
              <label for="avaliacaoPeso">Peso:</label>
              <input type="text" id="avaliacaoPeso" class="form-control" v-model="novaAvaliacao.peso">
            </div>
            <input type="submit" class="btn btn-primary" value="Calcular Avaliação">
            <input type="button" class="btn btn-primary" value="Cancelar" @click="limparDados()">
            <router-link :to="{ name: 'Avaliacoes'}">Cancelar</router-link>
          </form>
        </div>
    </div>

      <div class="panel panel-default">    
      <div class="panel-heading">
        <h3>Lista de Avalições</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>
              Nome
              </th>
              <th>
              Peso
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="avaliacao in avaliacoes">
                <td><a v-bind:href="avaliacao.nome">{{avaliacao.nome}}</a></td>
                <td>{{avaliacao.peso}}</td>
                </td>
                <td>
                  <span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removerAvaliacao(avaliacao)"></span>
                </td>
            </tr>    
          </tbody>
        </table>
      </div>
      </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
