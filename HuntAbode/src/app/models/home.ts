export class Home {
    constructor(public id: number, public type: string, public location: string, public occupancy: string, public status: string, public furnished: string, public monthlyCost: number, public securityDeposit: number, public rooms: number, public details : string, public detailedLocation: string, public ownerId: number){

    }
}


/*


Data in spring-boot
    int id;
    String type;
    String location;
	String occupancy;
	String status;
	String furnished;
	double monthlyCost;
	double securityDeposit;
	int rooms;
	String details;
	String detailedLocation;
	int ownerId;


*/