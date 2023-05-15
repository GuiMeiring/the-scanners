import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BlockUIModule } from 'ng-block-ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DashComponent } from './dash/dash.component';
import { RoutesModule } from './routes.module';
import { GroupComponent } from './group/group.component';
import { UserComponent } from './user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SubgroupComponent } from './subgroup/subgroup.component';
import { CollectionComponent } from './collection/collection.component';
import { ModalComponent } from './modal/modal.component';
import { ModalSubgroupComponent } from './modal-subgroup/modal-subgroup.component';
import { ModelCollectionComponent } from './model-collection/model-collection.component';
import { ProductsComponent } from './products/products.component';
import { ModalUserComponent } from './modal-user/modal-user.component';
import { ModalClientComponent } from './modal-client/modal-client.component';
import { ModalAddGroupComponent } from './modal-add-group/modal-add-group.component';
import { ModalAddSubgroupComponent } from './modal-add-subgroup/modal-add-subgroup.component';
import { ModalAddCollectionComponent } from './modal-add-collection/modal-add-collection.component';
import { ModalProductsComponent } from './modal-products/modal-products.component';
import { ModalAddProductsComponent } from './modal-add-products/modal-add-products.component';
import { ModalAddClientsComponent } from './modal-add-clients/modal-add-clients.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ModalEditUserComponent } from './modal-edit-user/modal-edit-user.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalDeleteUserComponent } from './modal-delete-user/modal-delete-user.component';
import { ModalEditAddressComponent } from './modal-edit-address/modal-edit-address.component';
import { ModalDeleteAddressComponent } from './modal-delete-address/modal-delete-address.component';
import { ModalAddAddressComponent } from './modal-add-address/modal-add-address.component';
import { RequestsComponent } from './requests/requests.component';
import { AddrequestsComponent } from './addrequests/addrequests.component';
import { ModalAddRequestsComponent } from './modal-add-requests/modal-add-requests.component';
import { ModalProRequestsComponent } from './modal-pro-requests/modal-pro-requests.component';
import { ModalEditRequestsComponent } from './modal-edit-requests/modal-edit-requests.component';
import { ModalDeleteProductRequestsComponent } from './modal-delete-product-requests/modal-delete-product-requests.component';
import { ModalEditProductRequestsComponent } from './modal-edit-product-requests/modal-edit-product-requests.component';
import { ModalAddProductRequestsComponent } from './modal-add-product-requests/modal-add-product-requests.component';
import { ModalCadastroComponent } from './modal-cadastro/modal-cadastro.component';
import { PromotionComponent } from './promotion/promotion.component';
import { AddPromotionComponent } from './add-promotion/add-promotion.component';
import { PrincipalPromotionComponent } from './principal-promotion/principal-promotion.component';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    DashComponent,
    GroupComponent,
    UserComponent,
    SubgroupComponent,
    CollectionComponent,
    ModalComponent,
    ModalSubgroupComponent,
    ModelCollectionComponent,
    ProductsComponent,
    ModalUserComponent,
    ModalClientComponent,
    ModalAddGroupComponent,
    ModalAddSubgroupComponent,
    ModalAddCollectionComponent,
    ModalProductsComponent,
    ModalAddProductsComponent,
    ModalAddClientsComponent,
    UsuarioComponent,
    ModalEditUserComponent,
    DropdownComponent,
    ModalDeleteUserComponent,
    ModalEditAddressComponent,
    ModalDeleteAddressComponent,
    ModalAddAddressComponent,
    RequestsComponent,
    AddrequestsComponent,
    ModalAddRequestsComponent,
    ModalProRequestsComponent,
    ModalEditRequestsComponent,
    ModalDeleteProductRequestsComponent,
    ModalEditProductRequestsComponent,
    ModalAddProductRequestsComponent,
    ModalCadastroComponent,
    PromotionComponent,
    AddPromotionComponent,
    PrincipalPromotionComponent
  ],
  imports: [
    RoutesModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BlockUIModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MatSlideToggleModule

  ],
  exports : [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
