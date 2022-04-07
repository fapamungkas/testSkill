export default {
    data() {
        return {
            arr = [
                {
                    id : 1,
                    name : "Bar",
                    phone : 01234567,
                    address : "Jakarta"
                },
                {
                    id : 2,
                    name : "Boo",
                    phone : 0897654321,
                    address : "Tanggerang"
                },
                {
                    id : 3,
                    name : "Foo",
                    phone : 0111111111,
                    address : "Depok"
                }
            ]
        }
    },
    methods: {
        delete(id){
            then(response => response.json());
        }
    },
}