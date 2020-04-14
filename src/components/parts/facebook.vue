<template>
    <div style = "display:flex;justify-content:center;align-items:center;height:100%;width:100%">
        <q-btn outline color="blue-grey" icon = "fab fa-facebook" label="login with facebook" style ="font-weight:800" @click="clicker" />
    </div>
</template>
<script>
export default {
    methods: {
        clicker() {
            this.$axios.post("users/all").then(r=> {
                console.log(r.data)
            })
        }
    }
}
</script>