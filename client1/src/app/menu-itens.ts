import { CollectionComponent } from "./collection/collection.component";
import { GroupComponent } from "./group/group.component";
import { ProductsComponent } from "./products/products.component";
import { RequestsComponent } from "./requests/requests.component";
import { SubgroupComponent } from "./subgroup/subgroup.component";
import { UserComponent } from "./user/user.component";
import { UsuarioComponent } from "./usuario/usuario.component";

//const roles = window.localStorage.getItem('roles');



export const MenuItens = [
    {
        path: 'group',
        caption : 'Grupo',
        icon : 'assessment',
        component: GroupComponent,
        
    },
    {
        path: 'subgroup',
        caption : 'Sub Grupo',
        icon : 'class',
        component: SubgroupComponent,
    },
    {
        path: 'collection',
        caption : 'Coleções',
        icon : 'horizontal_split',
        component: CollectionComponent,
    },
    {
        path: 'products',
        caption : 'Produtos',
        icon : ' local_mall',
        component:ProductsComponent ,
    },
    {
        path: 'client',
        caption : 'Clientes',
        icon : 'person',
        component: UserComponent,
    },
    {
        path: 'usuario',
        caption : 'Usuário',
        icon : 'person',
        component: UsuarioComponent,
    },
    {
        path: 'requestes',
        caption : 'Pedidos',
        icon : 'shopping_cart',
        component: RequestsComponent,
    },
    
]