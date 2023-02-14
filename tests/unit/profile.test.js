import { shallowMount } from "@vue/test-utils";
import ProfilView from "@/views/ProfilView.vue";

describe("ProfilView", () => {
  it("vérifie les valeurs de nom et prenom", () => {
    const wrapper = shallowMount(ProfilView, {
      propsData: {
        nom: "Dupont",
        prenom: "Jean",
      },
    });
    expect(wrapper.vm.nom).toBe("Dupont");
    expect(wrapper.vm.prenom).toBe("Jean");
  });
});
