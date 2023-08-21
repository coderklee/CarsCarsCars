const token = 'ae5210d6aa6c533590a229df99c4e3800bec9bc3a104621a'

export const server_calls = {
    get: async () => { 
        const response = await fetch('https://car-inventory-t7u6.onrender.com/api/inventory',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        let x = await response.json()
        console.log(x)
        return x
    },

    create: async (data: any = {}) => {
        const response = await fetch('https://car-inventory-t7u6.onrender.com/api/inventory',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        let x = await response.json()
        console.log(x)
        return x
    },

    update: async (id: string, data:any = {}) => {
        const response = await fetch(`https://car-inventory-t7u6.onrender.com/api/inventory/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        let x = await response.json()
        console.log(x)
        return x
    },

    delete: async (id: string) => {
        const response = await fetch(`https://car-inventory-t7u6.onrender.com/api/inventory/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },

        })

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return;
    },
}
