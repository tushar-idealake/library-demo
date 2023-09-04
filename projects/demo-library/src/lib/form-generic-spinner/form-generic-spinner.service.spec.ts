import { TestBed } from "@angular/core/testing";

import { FormGenericSpinnerService } from "./form-generic-spinner.service";

describe("FormGenericSpinnerService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: FormGenericSpinnerService = TestBed.get(FormGenericSpinnerService);
    expect(service).toBeTruthy();
  });
});
