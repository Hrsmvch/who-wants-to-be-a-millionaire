// ⚠️ **Note from dev**
// > Typically, buttons have multiple variants. To follow the Open/Closed principle,
// > a config is used for potential extension. Currently, only one variant exists —
// > if this is final version (only one is needed), the config can be removed;
// > if not, more variants can be added without changing the core button logic.

const buttonConfig = {
  default: 'button-default',
};

export type ButtonType = keyof typeof buttonConfig;
export default buttonConfig;
