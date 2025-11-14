import { typTeam } from "@/content/type";
import { BaseAdapter } from "./base/BaseAdapter";
import { StrapiTeam } from "./interfaces/types";
import { enmContact } from "@/content/enum";
import { enmStrapiContact } from "./interfaces/enums";

export class TeamAdapter extends BaseAdapter<StrapiTeam, typTeam> {
  private static instance: TeamAdapter;

  private constructor(strapiUrl: string) {
    super(strapiUrl);
  }

  public static getInstance(strapiUrl: string): TeamAdapter {
    if (!TeamAdapter.instance) {
      TeamAdapter.instance = new TeamAdapter(strapiUrl);
    }
    return TeamAdapter.instance;
  }
  mapContactEnum = (type: enmStrapiContact): enmContact => {
    switch (type) {
      case enmStrapiContact.whatsapp:
        return enmContact.whatsapp;
      case enmStrapiContact.call:
        return enmContact.call;
      case enmStrapiContact.email:
        return enmContact.email;
    }
  };

  adapt(source: StrapiTeam): typTeam {
    return {
      id: source.id,
      documentId: source.documentId,
      role: this.handleNullUndefined(source.role, ""),
      photo: this.adaptImageUrlSingle(source.photo),
      contactLinks: this.handleNullUndefined(source.contactLinks, []).map(
        (link) => ({
          type: this.mapContactEnum(link.type),
          value: link.value,
          icon: this.adaptImageUrlSingle(link.icon),
        })
      ),
      name: this.handleNullUndefined(source.name, ""),
    };
  }
}
