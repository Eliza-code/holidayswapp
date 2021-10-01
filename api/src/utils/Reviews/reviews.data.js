const { Review } = require("../../db")

const getInfoReviews = async () => {
    try {
        await Review.create({
            stars: 5,
            description: "The apartment is comfortable and pleasant",
            userId: 1,
            announcementId: 15,
            

        })
        await Review.create({
            stars: 3,
            description: "The apartment is very comfortable and beautiful. Excellent location",
            userId: 14,
            announcementId: 18,
            
        })
        await Review.create({
            stars: 3,
            description: "A very comfortable apartment, all the furniture in excellent condition",
            userId: 3,
            announcementId: 11,
            

        })
        await Review.create({
            stars: 4,
            description: "Very good location, comfortable facilities, well equipped",
            userId: 5,
            announcementId: 10,
            
        })
        await Review.create({
            stars: 3,
            description: "Friendliness, predisposition and location",
            userId: 15,
            announcementId: 8,
            
        })
        await Review.create({
            stars: 3,
            description: "Good location in this beautiful accommodation and all kinds of amenities",
            userId: 9,
            announcementId: 2,
            
        })
        await Review.create({
            stars: 5,
            description: "Friendliness, predisposition and location",
            userId: 1,
            announcementId: 18,
            

        })
        await Review.create({
            stars: 2,
            description: "Vodka tastes like wc water and doesn't shoot.",
            userId: 17,
            announcementId: 14,
            
        })
        await Review.create({
            stars: 3,
            description: "Good location in this beautiful accommodation and all kinds of amenities",
            userId: 9,
            announcementId: 10,
            

        })
        await Review.create({
            stars: 3,
            description: "A very comfortable apartment, all the furniture in excellent condition",
            userId: 8,
            announcementId: 4,
            
        })
        await Review.create({
            stars: 3,
            description: "Friendliness, predisposition and location",
            userId: 17,
            announcementId: 8,
            
        })
        await Review.create({
            stars: 3,
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
            userId: 9,
            announcementId: 11,
            
        })
        await Review.create({
            stars: 5,
            description: "Very good location, comfortable facilities, well equipped",
            userId: 1,
            announcementId: 9,
            

        })
        await Review.create({
            stars: 2,
            description: "Good location in this beautiful accommodation and all kinds of amenities",
            userId: 2,
            announcementId: 9,
            
        })
        await Review.create({
            stars: 3,
            description: "A very comfortable apartment, all the furniture in excellent condition",
            userId: 3,
            announcementId: 8,
            

        })
        await Review.create({
            stars: 3,
            description: "Very good location, comfortable facilities, well equipped",
            userId: 4,
            announcementId: 12,
            
        })
        await Review.create({
            stars: 3,
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
            userId: 5,
            announcementId: 1,
            
        })
        await Review.create({
            stars: 3,
            description: "Very good location, comfortable facilities, well equipped",
            userId: 6,
            announcementId: 9,
            
        })
        await Review.create({
            stars: 5,
            description: "A very comfortable apartment, all the furniture in excellent condition",
            userId: 1,
            announcementId: 3,
            

        })
        await Review.create({
            stars: 4,
            description: "A very comfortable apartment, all the furniture in excellent condition",
            userId: 10,
            announcementId: 3,
            
        })
        await Review.create({
            stars: 3,
            description: "The apartment is comfortable and pleasant",
            userId: 3,
            announcementId: 2,
           

        })
        await Review.create({
            stars: 3,
            description: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
            userId: 4,
            announcementId: 2,
            
        })
        await Review.create({
            stars: 3,
            description: "Very good location, comfortable facilities, well equipped",
            userId: 5,
            announcementId: 2,
    
        })
        await Review.create({
            stars: 3,
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
            userId: 6,
            announcementId: 2,
            
        })
        await Review.create({
            stars: 5,
            description: "Very fine vodka. Bottle is a nice detail.",
            userId: 1,
            announcementId: 14,
            

        })
        await Review.create({
            stars: 2,
            description: "The apartment is comfortable and pleasant",
            userId: 8,
            announcementId: 9,
            
        })
        await Review.create({
            stars: 4,
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
            userId: 13,
            announcementId: 12,
            

        })
        await Review.create({
            stars: 3,
            description: " The apartment is comfortable and pleasant",
            userId: 14,
            announcementId: 16,
            
        })
        await Review.create({
            stars: 3,
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
            userId: 5,
            announcementId: 20,
            
        })
        await Review.create({
            stars: 3,
            description: "The apartment is comfortable and pleasant",
            userId: 6,
            announcementId: 12,
            
        })
    }catch (e) {
        console.log(e)
    }
}

module.exports = {
    getInfoReviews
}
