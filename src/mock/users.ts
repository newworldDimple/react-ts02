export interface MockUser {
  username: string
  password: string
}

export const mockUsers: MockUser[] = [
  { username: 'admin', password: '123456' },
  { username: 'user', password: 'password' },
]

export const validateLogin = (username: string, password: string): boolean => {
  return mockUsers.some(user => user.username === username && user.password === password)
}


export const getUserData = (username: string) => {
  return mockUsers.find(user => user.username === username)
}