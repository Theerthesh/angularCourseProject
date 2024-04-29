export class ProductService{
  activeUser = ['abhi','gowtham','ganesh'];
  InactiveUser = ['kiran','ravi','rakesh'];

  Onactive(id:number){
    this.activeUser.push(this.InactiveUser[id])
    this.InactiveUser.splice(id,1)
  }

  OnInactive(id:number){
    this.InactiveUser.push(this.activeUser[id])
    this.activeUser.splice(id,1)
  }
}