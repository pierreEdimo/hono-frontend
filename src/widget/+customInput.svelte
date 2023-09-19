<script lang="ts">
    export let inputType: any; 
    export let placeholder: string; 
    export let required: boolean = false; 
    
    export let style: string; 
</script>

<input class="custom-input"
       placeholder={placeholder}
       style={style}
       required={required}
       type={inputType}>

<style lang="scss">
    .custom-input{
      width: auto;
      height: auto;
      padding: 14px 10px;
      outline: none;
      border: 1px solid #d3d3d3;
      border-radius: 5px;
    }
</style>