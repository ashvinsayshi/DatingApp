import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

export const preventUnsavedChangesGuard: CanDeactivateFn<MemberEditComponent> = (
  component: MemberEditComponent): boolean => {
  console.log(component.editForm?.dirty);
  if (!component.editForm) {
    return true;
  }
  if (component.editForm.dirty) {
    console.log('dirty');
    return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
  }
  console.log('not dirty');
  return true;
};
