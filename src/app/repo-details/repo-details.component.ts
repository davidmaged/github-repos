import { Component, Input, OnInit } from '@angular/core';
import { Repo } from 'src/models/repo.model';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.scss']
})
export class RepoDetailsComponent implements OnInit {

  @Input("repo") repo: Repo;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.repo);
  }

}
