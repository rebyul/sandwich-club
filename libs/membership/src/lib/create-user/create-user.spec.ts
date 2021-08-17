import { Context, createMockContext, MockContext } from '../context';
import { createUser } from './create-user';
import cuid from 'cuid';

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

describe('create-user', () => {
  it('create new user in database', async () => {
    const newUser = {
      id: cuid(),
      firstname: 'firstname',
      lastname: 'lastname',
      createdAt: new Date(),
    };

    mockCtx.prisma.user.create.mockResolvedValue(newUser);

    const result = await createUser(newUser.id, newUser.firstname, newUser.lastname, ctx.prisma);
    expect(result.firstname).toEqual(newUser.firstname);
    expect(result.lastname).toEqual(newUser.lastname);
    expect(result).toEqual(newUser);
  });
});
