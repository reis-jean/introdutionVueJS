<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode" >Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode" >Add Resources</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab">
        </component>
    </keep-alive>
    
</template>

<script>
import AddResource from './AddResource.vue';
import StoredResources from './StoredResources.vue'

export default{
    components:{
        StoredResources, 
        AddResource
    },
    data (){
        return{
            selectedTab: 'stored-resources',
             storedResources:[
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official Vue.js Documentation.',
                    link: 'https://vue.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn to google...',
                    link: 'https://google.com'
                },
            ],
        };
    },
    provide(){
        return{
            resources: this.storedResources,
            addResource: this.addResource
            
        }
    },
    computed:{
        storedResButtonMode(){
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        }, 
        addResButtonMode(){
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    },  
    methods:{
        setSelectedTab(tab){
            this.selectedTab = tab;
        },
        addResource(title, description, url){
            const newResource = {
                id: new Date().toISOString(),
                title, 
                description, 
                link: url
            };

            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';

        }

    }
}
</script>