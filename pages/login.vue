<template>
    <div class="body">
        <div id="container1">
            <img src="/img/edit/logo.png" alt="Logo do Sistema">
            <div id="login-container">
            <form>
                <input
                    v-model="user.username"
                    type="text"
                    class="input"
                    placeholder="Enter Username"
                    name="uname"
                    required
                />
                <input
                    v-model="user.password"
                    type="password"
                    class="input"
                    placeholder="Enter Password"
                    name="psw"
                    required
                />  
                <button @click.prevent="login">Entrar</button>
            </form>
        </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
 definePageMeta({
        layout: ''
    })
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';

const { authenticateUser } = useAuthStore(); // use auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive

const user = ref({
  username: 'kminchelle',
  password: '0lelplR',
});
const router = useRouter();

const login = async () => {
  await authenticateUser(user.value);
  // redirect to homepage if user is authenticated
  if (authenticated) {
    router.push('/edit');
  }
};
</script>
<style scoped>
    .body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: #1a1a1a; /* Fundo dark */
        color: #fff; /* Cor do texto */
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh; /* 100% da altura da viewport */
    }

    #logo {
        text-align: center;
        max-width: 400px;
        width: 100%;
        padding: 20px;
    } 
    
   
    
    #container1 {
        text-align: center;
        max-width: 400px;
        width: 100%;
        padding: 20px;
        
    } 
    
    #container1 img {
        max-width: 100%;
        height: auto;
        margin-bottom: 20px;
    }

    #login-container {
        text-align: center;
        max-width: 400px;
        width: 100%;
        padding: 20px;
        background-color: #333; /* Cor de fundo do formulário */
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

   
    #login-container img {
        max-width: 100%;
        height: auto;
        margin-bottom: 20px;
    }

    #login-container input {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        box-sizing: border-box;
        border: 1px solid #555; /* Cor da borda do campo de entrada */
        border-radius: 4px;
    }

    #login-container button {
        width: 100%;
        padding: 10px;
        background-color: #4caf50; /* Cor de fundo do botão */
        color: #fff; /* Cor do texto do botão */
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    #login-container button:hover {
        background-color: #45a049; /* Cor de fundo do botão ao passar o mouse */
    }
</style>