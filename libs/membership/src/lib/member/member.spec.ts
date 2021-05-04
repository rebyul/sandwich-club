import { UuidTool } from 'uuid-tool';
import { Member } from './member';

describe('invoice', () => {
  it('create new member', () => {
    const newId = UuidTool.newUuid();
    const testName = 'Test name';
    const newMember = new Member(newId, testName);

    expect(newMember).not.toBeNull();
    expect(newMember.id).toEqual(newId);
    expect(newMember.name).toEqual(testName);
  });
});
