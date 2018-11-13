import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(resources: any[], searchText: any): any[] {

    console.log(resources, searchText);

    // check if search is undefied

    if (!resources) return [];
    if (!searchText) return resources;
    searchText = searchText.toLowerCase();

    return resources.filter(user => {
      return user.resource.toLowerCase().includes(searchText.toLowerCase());
    });
  }
}
