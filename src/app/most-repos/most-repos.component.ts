import { Component, OnInit } from '@angular/core';
import { Repo } from 'src/models/repo.model';

import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-most-repos',
  templateUrl: './most-repos.component.html',
  styleUrls: ['./most-repos.component.scss']
})
export class MostReposComponent implements OnInit {

  repos: Repo[] = [];
  counter: number;

  constructor(private githubapiService: GithubApiService) {
    this.counter = 0;
  }

  ngOnInit(): void {
    this.getReposHelper(this.counter);

  }

  onScroll() {
    this.counter += 1;
    console.log('scrolled!!');
    console.log(this.counter);
    this.getReposHelper(this.counter);
  }

  getReposHelper(i: number){
    this.githubapiService.getGithubRepos(i).subscribe((response: any) => {
      for(var item of response.items){
        let repo = new Repo(item.id, item.name, item.description, item.stargazers_count, item.open_issues, item.owner.avatar_url);
        this.repos.push(repo);
      }
    },(error) => {
      console.log(error)
    });
  }
}
