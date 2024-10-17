export const useApi = () => {
    return {
      fetchPets: jest.fn().mockResolvedValue([
        {
          id: '1726932465810',
          name: 'Waly',
          species: 'Selkirk',
          age: 3,
          imageUrl: '',
          type: 'Chat',
        },
        // You can add more mock pets if needed
      ]),
      addPet: jest.fn().mockResolvedValue({
        id: '1726932465810',
        name: 'Waly',
        species: 'Selkirk',
        age: 3,
        imageUrl: '',
        type: 'Chat',
      }),
      loading: false,
      error: null,
    };
  };
  