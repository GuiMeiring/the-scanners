import { CollectionComponent } from './collection/collection.component';
import { GroupComponent } from './group/group.component';
import { PrincipalPromotionComponent } from './principal-promotion/principal-promotion.component';
import { ProductsComponent } from './products/products.component';
import { RequestsComponent } from './requests/requests.component';
import { SubgroupComponent } from './subgroup/subgroup.component';
import { UserComponent } from './user/user.component';
import { UsuarioComponent } from './usuario/usuario.component';

//const roles = window.localStorage.getItem('roles');

export const MenuItens = [
  {
    path: 'group',
    caption: 'Grupo',
    icon: 'assessment',
    roles: [1, 2],
    component: GroupComponent,
  },
  {
    path: 'subgroup',
    caption: 'Sub Grupo',
    icon: 'class',
    roles: [1, 2],
    component: SubgroupComponent,
  },
  {
    path: 'collection',
    caption: 'Coleções',
    icon: 'horizontal_split',
    roles: [1],
    component: CollectionComponent,
  },
  {
    path: 'products',
    caption: 'Produtos',
    icon: ' local_mall',
    roles: [1, 2, 3],
    component: ProductsComponent,
  },
  {
    path: 'client',
    caption: 'Clientes',
    icon: 'person',
    roles: [1, 2],
    component: UserComponent,
  },
  {
    path: 'usuario',
    caption: 'Usuário',
    icon: 'person',
    roles: [1],
    component: UsuarioComponent,
  },
  {
    path: 'requestes',
    caption: 'Pedidos',
    icon: 'shopping_cart',
    roles: [1, 4],
    component: RequestsComponent,
  },
  {
  path: 'promotion',
    caption: 'Promoções',
    icon: 'shopping_cart',
    roles: [1,2,3],
    component: PrincipalPromotionComponent,
  },
];
