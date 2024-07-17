public getUser(){
      this.apiService.getData(' https://api.expert-sante.continuousnet.com/api/dashboard/total/User').subscribe(
        (response :any)=> {
          this.NumberOfUser = response;
          console.log(this.NumberOfUser);
        },
        error  => {
          console.error('Erreur lors de la récupération des données :', error);
        }
  );
}
