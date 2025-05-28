<!-- src/components/layout/NavBar.vue -->

<template>
    <header>

        <nav class="navbar px-6 pt-2" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                            
                <img :src="logo" alt="" class="logoNif">
            
                <button  class='navbar-burger' aria-label="menu" aria-expanded="false" data-target="navbar" >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>
            
            <div id="navbar" class="navbar-menu">
                <div class="navbar-start ml-6">
                    <a class="navbar-item"
                        href="#aboutMe" >
                        À propos de moi    
                    </a>
                    
                    <a class="navbar-item"
                        href="#skills" >
                        Compétences    
                    </a>
                    
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link"
                            href="#projets" >
                            Mes Projets  
                        </a>
                        
                        <div class="navbar-dropdown">
                            <a class="navbar-item"
                                href="#gemenyWeb" >
                                Interface Gemeny Web  
                            </a><a class="navbar-item"
                                href="#projet2" >
                                Projet 2 
                            </a><a class="navbar-item"
                                href="#projet3" >
                                Projet 3  
                            </a>

                        </div>
                    </div>
                </div>
                
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>Contact</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
    import logo from '../../assets/logo.png'
    




</script>

<style scoped>

    .logoNif {
        height: 4em;
        }

/* 
    .navbar {
        display: flex;
        align-items: center;
        width: 100%;
        color: var(--color-orange);
        justify-content: space-between;
        padding: 1rem;
        background: var(--color-purple);
    }
    .nav-links {
        display: flex;
        gap: 2rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .burger {
        display: none;
        flex-direction: column;
        gap: 0.3rem;
        background: none;
        border: none;
        cursor: pointer;
    }
    .burger span {
        display: block;
        width: 25px;
        height: 3px;
        background: var(--color-orange);
        border-radius: 2px;
    }

    /* Responsive styles */
    /* @media (max-width: 1023px) {
        .nav-links {
            display: none;
        }
        .burger {
            display: flex;
        }
        .mobile-menu {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            position: absolute;
            top: 60px;
            right: 1rem;
            background: #fff;
            border: 1px solid #eee;
            padding: 1rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
    }

    @media (min-width: 1024px) {
        .mobile-menu {
            display: none;
        }
    }  */

</style>
