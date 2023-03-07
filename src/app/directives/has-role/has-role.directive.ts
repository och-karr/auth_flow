import {ChangeDetectorRef, Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {ContextRoleService} from "../../services/context-role.service";

@Directive({ selector: '[hasRole]' })
export class HasRoleDirective implements OnInit, OnDestroy {
  @Input() hasRole: string | null = null; //taka sama nazwa jak selektor

  @Input()
  set hasRoleElse(templateRef: TemplateRef<any> | null) {
    this.elseTpl = templateRef;
  }

  private elseTpl: TemplateRef<any> | null = null;
  private _onDestroy$ = new Subject<void>();

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private cdr: ChangeDetectorRef,
    private _testService: ContextRoleService
  ) {}

  ngOnInit() {
    this._testService
      .get()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((role: string | null) => {
        this.viewContainer.clear();

        if (role === 'admin') {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          if (this.elseTpl) {
            this.viewContainer.createEmbeddedView(this.elseTpl);
          }
        }
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
}
