import { readonly } from "vue";

import AgendaModule from "./agenda";
import ContactModule from "./contact";

export default readonly({
  Agenda: AgendaModule,
  Contact: ContactModule,
});
