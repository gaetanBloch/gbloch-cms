import type { Schema, Attribute } from '@strapi/strapi';

export interface TestTestcomp extends Schema.Component {
  collectionName: 'components_test_testcomps';
  info: {
    displayName: 'Testcomp';
    icon: 'archive';
  };
  attributes: {
    textcomp: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'test.testcomp': TestTestcomp;
    }
  }
}
