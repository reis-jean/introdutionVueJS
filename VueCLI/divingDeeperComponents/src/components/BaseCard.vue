<template>
    <div>
        <header>
            <slot name="header" v-if="$slots.header">
                <h2>The Default</h2>
                <!-- Se o header não for informado, a parte default deve substituir -->
                 <!-- caso não tenha um conteudo default é ideal verificar antes de imprimir o slot sem motivo na tela -->
            </slot>
        </header>
        <slot></slot>
    </div>
</template>

<script>
export default{
   mounted(){
    console.log(this.$slots.header);
   }
}

</script>
<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

div{
    margin: 2rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
}
</style>