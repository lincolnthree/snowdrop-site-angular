import {APP_INITIALIZER, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {FormComponent} from "./wizard.component";
import {History} from "./history.component";
import {ForgeService} from "../shared/forge.service";
import {EnhancedForgeService} from "../shared/forge.enhance.service";
import {Config} from "../shared/config.component";
import {AsciidocService} from "./components/asciidoc/asciidoc.service";

import {IntroComponent} from "./pages/intro/intro.component";
import {LinkAccountsPage} from "./pages/linkAccounts/link-accounts.page";
import {DeploymentTypePage} from "./pages/deployment/deployment.page";
import {MissionPage} from "./pages/mission/mission.page";
import {RuntimePage} from "./pages/runtime/runtime.page";
import {ProjectInfoPage} from "./pages/projectInfo/projectInfo.page";
import {DeployPage} from "./pages/deploy/deploy.page";
import {NextStepsPage} from "./pages/nextSteps/nextSteps.page";
import {GenericPage} from "./pages/generic/generic.page";

import {KeycloakService} from "../shared/keycloak.service";
import {KEYCLOAK_HTTP_PROVIDER} from "../shared/keycloak.http";
import {TokenService} from "../shared/token.service";

import {ProjectSelectModule} from "./components/project-select/project-select";
import {StepComponent} from "./components/step/step.component";
import {InputComponent} from "./components/input/input.component";
import {ProjectNameInputModule} from "./components/project-name-input/project-name-input.component";
import {ButtonComponent} from "./components/button/button.component";
import {AsciidocComponent} from "./components/asciidoc/asciidoc.component";
import {MultiselectDropdownModule} from "angular-2-dropdown-multiselect/src/multiselect-dropdown";
import {AuthenticationDirective} from "../shared/authentication.directive";
import {CiDirective} from "../shared/ci.directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectSelectModule,
    MultiselectDropdownModule,
    ProjectNameInputModule
  ],
  declarations: [
    FormComponent,
    IntroComponent,
    LinkAccountsPage,
    DeploymentTypePage,
    MissionPage,
    RuntimePage,
    ProjectInfoPage,
    NextStepsPage,
    DeployPage,
    GenericPage,
    StepComponent,
    InputComponent,
    ButtonComponent,
    AsciidocComponent,
    AuthenticationDirective,
    CiDirective
  ],
  providers: [
    KeycloakService,
    KEYCLOAK_HTTP_PROVIDER,
    TokenService,
    History,
    Config,
    AsciidocService,
    {provide: APP_INITIALIZER, useFactory: (config: Config) => () => config.load(), deps: [Config], multi: true},
    {
      provide: ForgeService,
      useClass: EnhancedForgeService
    }
  ]
})
export class WizardModule {
}