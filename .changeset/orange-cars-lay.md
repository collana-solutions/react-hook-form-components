---
"@collana-solutions/react-hook-form-components": major
---

- Added getTypeaheadAddonLayoutStyle helper to lay out a typeahead text field as addon start, values and input, addon end. Moreover, export of CommonInputProps and MergedAddonProps types is provided.

- Removed variant property from TypeaheadTextField: it is outlined by default.

- Changed the layout of TypeaheadTextField: the selected values (chips) and the input are grouped between the addons, and the custom addon right, the clear icon and the popup icon are rendered together as one end addon on the far right, both for single and multiple selection.

- AsyncTypeaheadInput and StaticTypeaheadInput now supports async onInputChange and onChange.
